"use client";

import React from "react";
import { useOrganizationList } from "@clerk/nextjs";
import Item from "./item";

const List: React.FC = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!userMemberships.data?.length) return null;

  return (
    <div>
      {userMemberships.data.map(({ id, organization: { name, imageUrl } }) => (
        <Item key={id} id={id} name={name} imageURL={imageUrl} />
      ))}
    </div>
  );
};

export default List;
