import Image from "next/image";
import Icon from "public/icons/fill/humidity.svg";

export default function Humidity() {
  return (
    <div className="widget">
      <h3>Humidity</h3>
      <div>
        <Image src={Icon} alt="icon" />
        <p>40</p>
      </div>
    </div>
  );
}
