import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { EnhancedResCard, ResCard } from "../components/ResCard";
import RES_CARD_MOCK from "./mocks/resCardMock.json";

describe("Test Cases For Restaurant Card", () => {
  const { name, cuisines, avgRating, areaName, cloudinaryImageId } =
    RES_CARD_MOCK;
  it("Should Render the restaurant card", () => {
    render(
      <ResCard
        name={name}
        cuisines={cuisines}
        rating={avgRating}
        area={areaName}
        imageID={cloudinaryImageId}
      />
    );

    const resName = screen.getByText("Priyadarshini Grand");

    expect(resName).toBeInTheDocument();
  });

  const ResCardClosed = EnhancedResCard(ResCard);
  it("Should Render Enhanced Restarant Card", () => {
    render(
      <ResCardClosed
        name={name}
        cuisines={cuisines}
        rating={avgRating}
        area={areaName}
        imageID={cloudinaryImageId}
      />
    );

    const closedText = screen.getByText("Closed");
    expect(closedText).toBeInTheDocument();
  });
});
