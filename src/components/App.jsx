import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const feedbacks = Object.keys({ good, neutral, bad });
  
	const countTotalFeedback = () => {
		return good + neutral + bad;
	}

	const countPositiveFeedbackPercentage = () => {
		const total = countTotalFeedback();
		return total ? Math.round((good * 100) / total) : 0;
	};

	const onLeaveFeedback = feedbacks => {
		switch (feedbacks) {
			case 'good':
				setGood(good + 1);
				break;
			case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default:
                break;
			}
		};


    return (
    <>
	<Section title="Please leave feedback">
		<FeedbackOptions options={feedbacks} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {countTotalFeedback() ? (
	  <Section title="Statistics">
		<Statistics
			good={good}
			neutral={neutral}
			bad={bad}
			total={countTotalFeedback()}
			positivePercentage={countPositiveFeedbackPercentage()}
		/>
		</Section>
		) : ( 
		<Notification message="No feedback given" />
		)}

    </>
  );
 }



