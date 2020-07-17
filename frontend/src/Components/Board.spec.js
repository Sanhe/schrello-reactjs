import React from "react";
import { shallow } from "enzyme";
import "jest-enzyme";
import Board from "./Board";
import Columns from "./Containers/Columns";

describe("Board Component", () => {
    it("Board renders correctly with shallow", () => {
        const board = shallow(<Board />);
        const columns = <Columns />;

        expect(board.contains(columns)).toEqual(true);
    });
});
