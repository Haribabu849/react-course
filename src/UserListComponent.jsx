import React from "react";

export default function UserListComponent({ name, dept, age }) {
  return (
    <div>
      <h2 style={{ border: "2px solid  black", background: "yellow" }}>
        {name} - {dept}-{age}
      </h2>
    </div>
  );
}
