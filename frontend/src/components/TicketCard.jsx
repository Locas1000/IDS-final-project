import './TicketCard.css';

function TicketCard({ title, status, priority }) {
  return (
    <div className="ticket-card">
      <h3>{title}</h3>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
    </div>
  );

 
}
 export default TicketCard;