import { useState } from "react";

function ListGroup() {
  const mainMenu = ["Home", "About", "Work", "Contact"];
  const [selectedOption, setSelectedOption] = useState(-1);

  return (
    <>
      <h2>Main Menu</h2>

      {mainMenu.length === 0 && <p>No Options Available</p>}
      <ul className="list-group">
        {mainMenu.map((textOption) => (
          <li
            className={
              selectedOption === mainMenu.indexOf(textOption)
                ? "list-group-item active"
                : "list-group-item"
            }
            key={textOption}
            onClick={() => {
              setSelectedOption(mainMenu.indexOf(textOption));
            }}
          >
            {textOption}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
