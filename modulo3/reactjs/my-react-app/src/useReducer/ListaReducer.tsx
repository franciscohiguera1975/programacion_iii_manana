import { useReducer, useState, type FormEvent, type ChangeEvent } from 'react';

type State = string[];

type Action =
  | { type: 'add'; payload: string }
  | { type: 'remove'; index: number };

const initialState: State = [];

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
}

export default function ListaReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [texto, setTexto] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (texto.trim()) {
      dispatch({ type: 'add', payload: texto });
      setTexto("");
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={texto} onChange={handleChange} />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {state.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => dispatch({ type: 'remove', index })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
