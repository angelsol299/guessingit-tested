import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it("renders without error", () => {});
it("renders no text when success pros is false", () => {});
it("renders non-empty congrats message when success prop is true", () => {});
