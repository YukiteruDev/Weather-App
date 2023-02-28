import Image from "next/image";
import SunriseIcon from "public/icons/fill/sunrise.svg";
import SunsetIcon from "public/icons/fill/sunset.svg";

type PropsType = {
  isRise: boolean;
};
export default function Sunrise({ isRise }: PropsType) {
  return (
    <div className="widget">
      <h3>{isRise ? "Sunrise" : "Sunset"}</h3>
      <div>
        <Image src={isRise ? SunriseIcon : SunsetIcon} alt="sunrise" />
        <p>6:47 AM</p>
      </div>
    </div>
  );
}
