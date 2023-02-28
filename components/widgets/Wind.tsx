import Image from "next/image";
import Icon from "public/icons/fill/wind-beaufort-5.svg";

export default function Wind() {
  return (
    <div className="widget">
      <h3>Wind Speed</h3>
      <div>
        <Image src={Icon} alt="icon" />
      </div>
      <p>21km/h, Southwest</p>
    </div>
  );
}
