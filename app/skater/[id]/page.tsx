import ProfileContent from "./ProfileContent";

export const instant = false;

export default async function SkaterProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProfileContent id={id} />;
}
