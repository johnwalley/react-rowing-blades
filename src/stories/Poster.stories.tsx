import React from "react";
import { Blade } from "../components/Blade";

import { ComponentStory, ComponentMeta } from "@storybook/react";

const Club = ({ club, x, y }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text y={50} fontSize="2mm">
        {club.name}
      </text>
      <g transform={`scale(0.2)`}>
        <Blade club={club.id} />
      </g>
    </g>
  );
};

export default {
  title: "Poster",
} as ComponentMeta<any>;

const clubs = [
  {
    id: "vet",
    name: "Camb Vets",
  },
  {
    id: "cab",
    name: "Cantabs",
  },
  {
    id: "crc",
    name: "Chesterton",
  },
  {
    id: "cam",
    name: "City",
  },
  {
    id: "cha",
    name: "Champs",
  },
  {
    id: "iel",
    name: "Isle of Ely",
  },
  {
    id: "cnn",
    name: "Nines",
  },
  {
    id: "rob",
    name: "Rob Roy",
  },
  {
    id: "sne",
    name: "St Neots",
  },
  {
    id: "xpr",
    name: "XPress",
  },
];

export const Primary: ComponentStory<any> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="210mm"
    height="297mm"
    preserveAspectRatio="xMinYMin slice"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 210 297"
  >
    <rect x={10} y={10} width={210 - 20} height={297 - 20} fill="#dadada" />
    <rect width={210} height={297} stroke="black" strokeWidth={1} fill="none" />
    {clubs.map((club, i) => (
      <Club club={club} x={50 * (i % 4)} y={50 * Math.floor(i / 4)} />
    ))}
  </svg>
);
