export const dynamicParams = true;

export default function NotesNew({ params }: { params: { id: string } }) {
  return <main className="min-h-screen justify-between">{params.id}</main>;
}
