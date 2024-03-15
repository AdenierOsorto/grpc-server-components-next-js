'use client'
import type { GetServerSideProps } from 'next';

import { useEffect, useState } from 'react';
import { getClient } from './components/server';
interface Client {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  active: boolean;
};

export default function Home() {
  const [client, setClient] = useState<Client>()
  useEffect(() => {
    const fetchData = async () => {
      const { client, error } = await getClient(1);
      setClient(client as Client)
      console.log({error})
    }
    fetchData()
  }, [])
  return (
    <div className="container">
      <span>id: {client?.id}</span>
      <span>FistName: {client?.firstName}</span>
      <span>LastName: {client?.lastName}</span>
      <span>Email: {client?.email}</span>
      <span>Age: {client?.age}</span>
    </div>
  );
}
