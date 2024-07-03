import Card from "./shared/Card";

function FeedbackItem({ item }) {
	return (
		<Card className="card">
			<div className="num-display">{item.rating}</div>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

export default FeedbackItem;
