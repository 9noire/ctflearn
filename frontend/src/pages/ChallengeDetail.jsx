import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';
import { challenges, categories } from '../data/mock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import { useState, useEffect } from 'react';

const ChallengeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const challenge = challenges.find(c => c.id === id);
  const category = categories.find(c => c.id === challenge?.category);

  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // Check if already completed
    const completed = JSON.parse(localStorage.getItem('completedChallenges') || '[]');
    setIsCompleted(completed.includes(id));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);

    // Normalize answer for comparison
    const normalizedAnswer = answer.toLowerCase().trim();
    const normalizedCorrect = challenge.answer.toLowerCase().trim();

    if (normalizedAnswer === normalizedCorrect) {
      // Correct answer!
      toast.success('Correct! Challenge completed!', {
        description: `You earned ${challenge.points} points!`
      });

      // Save to localStorage
      const completed = JSON.parse(localStorage.getItem('completedChallenges') || '[]');
      if (!completed.includes(id)) {
        completed.push(id);
        localStorage.setItem('completedChallenges', JSON.stringify(completed));
        setIsCompleted(true);
      }

      // Show solution
      setShowSolution(true);
    } else {
      // Incorrect answer
      toast.error('Incorrect answer', {
        description: 'Try again or use a hint!'
      });
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'hard':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  if (!challenge || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Challenge not found</h1>
          <Link to="/categories">
            <Button>Back to Categories</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to={`/challenges/${category.id}`}
          className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Challenges
        </Link>

        {/* Challenge Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty}
            </Badge>
            <Badge className="bg-slate-100 text-slate-700 border-slate-200">
              {challenge.points} points
            </Badge>
            <Badge
              className="border"
              style={{
                backgroundColor: `${category.color}20`,
                color: category.color,
                borderColor: `${category.color}40`
              }}
            >
              {category.name}
            </Badge>
            {isCompleted && (
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                Completed
              </Badge>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            {challenge.title}
          </h1>
          {attempts > 0 && (
            <p className="text-slate-600">
              Attempts: {attempts}
            </p>
          )}
        </div>

        {/* Challenge Description */}
        <Card className="p-6 bg-white border-slate-200 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Challenge</h2>
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {challenge.description}
          </p>
        </Card>

        {/* Answer Form */}
        <Card className="p-6 bg-white border-slate-200 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Submit Your Answer</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Enter your answer..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="text-lg"
                disabled={isCompleted && showSolution}
              />
            </div>
            <Button
              type="submit"
              className="w-full text-white shadow-md"
              style={{ backgroundColor: category.color }}
              disabled={!answer.trim() || (isCompleted && showSolution)}
            >
              {isCompleted && showSolution ? 'Challenge Completed' : 'Submit Answer'}
            </Button>
          </form>
        </Card>

        {/* Hint Section */}
        <Card className="p-6 bg-white border-slate-200 mb-6">
          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-cyan-600" />
              <h2 className="text-lg font-bold text-slate-900">Hint</h2>
            </div>
            {showHint ? (
              <EyeOff className="h-5 w-5 text-slate-400" />
            ) : (
              <Eye className="h-5 w-5 text-slate-400" />
            )}
          </button>
          {showHint && (
            <div className="mt-4 p-4 bg-cyan-50 rounded-lg border border-cyan-200">
              <p className="text-slate-700 leading-relaxed">{challenge.hint}</p>
            </div>
          )}
        </Card>

        {/* Solution Section */}
        <Card className="p-6 bg-white border-slate-200 mb-6">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="w-full flex items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              {isCompleted ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-slate-400" />
              )}
              <h2 className="text-lg font-bold text-slate-900">Solution</h2>
            </div>
            {showSolution ? (
              <EyeOff className="h-5 w-5 text-slate-400" />
            ) : (
              <Eye className="h-5 w-5 text-slate-400" />
            )}
          </button>
          {showSolution && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                {challenge.solution}
              </p>
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link to={`/challenges/${category.id}`}>
            <Button variant="outline" className="border-slate-300 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All {category.name} Challenges
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetail;