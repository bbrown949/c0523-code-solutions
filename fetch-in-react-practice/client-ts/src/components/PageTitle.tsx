type Props = {
  text: string;
};
export default function PageTitle({ text }: Props) {
  return <h1 className="mb-4">{text}</h1>;
}
