export default function Input({ label, id, ...props }) {
  return (
    <p className="py-3 mr-4">
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>
      <input id={id} name={id} {...props} required />
    </p>
  );
}
