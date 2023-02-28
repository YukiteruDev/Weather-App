import Image from "next/image";

type PropsType = {
  level: number;
};
export default function UVIndex({ level }: PropsType) {
  const Icon = require(`public/icons/fill/uv-index-${level}.svg`);
  return (
    <div className="widget">
      <h3>Humidity</h3>
      <div>
        <Image src={Icon} alt="icon" />
      </div>
    </div>
  );
}
