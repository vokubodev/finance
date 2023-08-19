import { Purchase } from "@/model/Purchase";

export default function ListItems({
  title,
  items,
}: {
  title: string;
  items: Purchase[];
}) {
  if (items.length < 0) return null;
  return (
    <table>
      <title>{title}</title>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Data</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={`tr-${item.id}`}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{new Date(item.date).toDateString()}</td>
            <td>{item.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
