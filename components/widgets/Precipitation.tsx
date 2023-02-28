import Image from "next/image";
import Icon from "public/icons/fill/raindrops.svg";

export default function Precipitation() {
  return (
    <div className="widget">
      <h3>Precipitation</h3>
      <div>
        <Image src={Icon} alt="icon" />
        <p>0.50mm</p>
      </div>
    </div>
  );
}
