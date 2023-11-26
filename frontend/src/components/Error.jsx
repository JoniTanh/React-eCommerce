export default function Error({ title, message }) {
  return (
    <div className="text-center font-bold text-red-600 bg-red-200 w-auto mx-auto my-0 rounded-lg p-4 mb-2">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
