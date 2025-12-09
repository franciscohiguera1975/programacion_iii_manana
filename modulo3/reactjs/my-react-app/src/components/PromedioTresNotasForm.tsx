import { useState } from 'react';

export default function PromedioTresNotasForm() {
  const [nota1, setnota1] = useState(0);
  const [nota2, setnota2] = useState(0);
  const [nota3, setnota3] = useState(0);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Resultado Promedio de nota, ${(nota1 + nota2+nota3)/3}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="nota1"
        value={nota1}
        onChange={(e) => setnota1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="nota2"
        value={nota2}
        onChange={(e) => setnota2(Number(e.target.value))}
      />

      <input
        type="number"
        placeholder="nota3"
        value={nota3}
        onChange={(e) => setnota3(Number(e.target.value))}
      />

      <button type="submit">Enviar</button>
    </form>
  );
}