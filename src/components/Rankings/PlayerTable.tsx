'use client'

// src/components/Rankings/PlayerTable1.tsx

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/Rankings/Table";

type YearType = '2024' | '2023' | '2022';

interface Player {
  pos: number;
  country: string;
  name: string;
  tournaments: number;
  points: number;
}

interface PlayerTableProps {
  year: YearType;
  category: string;
}

const data: Record<YearType, Record<string, Player[]>> = {
  2024: {
    pro: [
      { pos: 1, country: "🇦🇺", name: "Scott HEND", tournaments: 3, points: 1581.5 },
      { pos: 2, country: "🇦🇺", name: "Richard GREEN", tournaments: 1, points: 990.0 },
      { pos: 3, country: "🇬🇧", name: "Peter BAKER", tournaments: 3, points: 959.8 },
      { pos: 4, country: "🇺🇸", name: "Clark DENNIS", tournaments: 2, points: 825.0 },
      { pos: 5, country: "🇸🇪", name: "Mikael LUNDBERG", tournaments: 2, points: 610.5 },
      { pos: 6, country: "🇿🇦", name: "James KINGSTON", tournaments: 3, points: 449.5 },
      { pos: 7, country: "🇸🇪", name: "Joakim HAEGGMAN", tournaments: 3, points: 430.6 },
      { pos: 8, country: "🇬🇧", name: "Greg OWEN", tournaments: 3, points: 399.3 },
      { pos: 9, country: "🇧🇷", name: "Adilson DA SILVA", tournaments: 3, points: 394.9 },
      { pos: 10, country: "🇿🇦", name: "Ernie ELS", tournaments: 1, points: 375.0 },
    ],
    amateur: [
      { pos: 1, country: "🇲🇺", name: "Ian Lawler", tournaments: 1, points: 1150.0 },
      { pos: 2, country: "🇬🇧", name: "Richard Harrop", tournaments: 1, points: 500.0 },
      { pos: 3, country: "🇳🇴", name: "Richard Dillon", tournaments: 1, points: 250.0 },
      { pos: 4, country: "🇬🇧", name: "Ryan Howsam", tournaments: 1, points: 250.0 },
      { pos: 5, country: "🇬🇧", name: "Nigel Williams", tournaments: 1, points: 147.5 },
    ],
  },
  2023: {
    pro: [
      { pos: 1, country: "🇬🇧", name: "Peter BAKER", tournaments: 15, points: 4160.8 },
      { pos: 2, country: "🇧🇷", name: "Adilson DA SILVA", tournaments: 16, points: 3443.2 },
      { pos: 3, country: "🇿🇦", name: "James KINGSTON", tournaments: 15, points: 1634.2 },
      { pos: 4, country: "🇦🇷", name: "Ricardo GONZALEZ", tournaments: 14, points: 1617.6 },
      { pos: 5, country: "🇸🇪", name: "Patrik SJÖLAND", tournaments: 14, points: 1593.4 },
      { pos: 6, country: "🇬🇧", name: "Phillip ARCHER", tournaments: 16, points: 1567.6 },
      { pos: 7, country: "🇸🇪", name: "Michael JONZON", tournaments: 12, points: 1433.4 },
      { pos: 8, country: "🇸🇨", name: "Greig HUTCHEON", tournaments: 14, points: 1413.4 },
      { pos: 9, country: "🇸🇪", name: "Joakim HAEGGMAN", tournaments: 16, points: 1337.8 },
      { pos: 10, country: "🇼🇸", name: "Phillip PRICE", tournaments: 16, points: 1297.0 },
    ],
    amateur: [
      { pos: 1, country: "🇬🇧", name: "Peter BAKER", tournaments: 15, points: 4160.8 },
      { pos: 2, country: "🇧🇷", name: "Adilson DA SILVA", tournaments: 16, points: 3443.2 },
      { pos: 3, country: "🇿🇦", name: "James KINGSTON", tournaments: 15, points: 1634.2 },
      { pos: 4, country: "🇦🇷", name: "Ricardo GONZALEZ", tournaments: 14, points: 1617.6 },
      { pos: 5, country: "🇸🇪", name: "Patrik SJÖLAND", tournaments: 14, points: 1593.4 },
      { pos: 6, country: "🇬🇧", name: "Phillip ARCHER", tournaments: 16, points: 1567.6 },
      { pos: 7, country: "🇸🇪", name: "Michael JONZON", tournaments: 12, points: 1433.4 },
      { pos: 8, country: "🇸🇨", name: "Greig HUTCHEON", tournaments: 14, points: 1413.4 },
      { pos: 9, country: "🇸🇪", name: "Joakim HAEGGMAN", tournaments: 16, points: 1337.8 },
      { pos: 10, country: "🇼🇸", name: "Phillip PRICE", tournaments: 16, points: 1297.0 },
    ],
  },
  2022: {
    pro: [
      { pos: 1, country: "🇲🇺", name: "Ian Lawler", tournaments: 1, points: 1150.0 },
      { pos: 2, country: "🇬🇧", name: "Richard Harrop", tournaments: 1, points: 500.0 },
      { pos: 3, country: "🇳🇴", name: "Richard Dillon", tournaments: 1, points: 250.0 },
      { pos: 4, country: "🇬🇧", name: "Ryan Howsam", tournaments: 1, points: 250.0 },
      { pos: 5, country: "🇬🇧", name: "Nigel Williams", tournaments: 1, points: 147.5 },
    ],
    amateur: [
      { pos: 1, country: "🇬🇧", name: "Peter BAKER", tournaments: 15, points: 4160.8 },
      { pos: 2, country: "🇧🇷", name: "Adilson DA SILVA", tournaments: 16, points: 3443.2 },
      { pos: 3, country: "🇿🇦", name: "James KINGSTON", tournaments: 15, points: 1634.2 },
      { pos: 4, country: "🇦🇷", name: "Ricardo GONZALEZ", tournaments: 14, points: 1617.6 },
      { pos: 5, country: "🇸🇪", name: "Patrik SJÖLAND", tournaments: 14, points: 1593.4 },
      { pos: 6, country: "🇬🇧", name: "Phillip ARCHER", tournaments: 16, points: 1567.6 },
      { pos: 7, country: "🇸🇪", name: "Michael JONZON", tournaments: 12, points: 1433.4 },
      { pos: 8, country: "🇸🇨", name: "Greig HUTCHEON", tournaments: 14, points: 1413.4 },
      { pos: 9, country: "🇸🇪", name: "Joakim HAEGGMAN", tournaments: 16, points: 1337.8 },
      { pos: 10, country: "🇼🇸", name: "Phillip PRICE", tournaments: 16, points: 1297.0 },
    ],
  },
};

const PlayerTable: React.FC<PlayerTableProps> = ({ year, category }) => {
  const players: Player[] = data[year][category];

  return (
    <Table className="table-auto w-full border-collapse border border-gray-300">
      <TableHeader>
        <TableRow>
          <TableHead>POS.</TableHead>
          <TableHead>COUNTRY</TableHead>
          <TableHead>PLAYER NAME</TableHead>
          <TableHead>TOURNAMENTS PLAYED</TableHead>
          <TableHead>OM POINTS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map((player) => (
          <TableRow key={player.pos}>
            <TableCell>{player.pos}</TableCell>
            <TableCell>{player.country}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.tournaments}</TableCell>
            <TableCell>{player.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PlayerTable;
