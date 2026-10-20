import React from "react";
import { Composition } from "remotion";
import { ShurianLabsPromoVideo } from "./ShurianLabsPromoVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ShurianLabsPromo"
        component={ShurianLabsPromoVideo}
        durationInFrames={450}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />
    </>
  );
};
