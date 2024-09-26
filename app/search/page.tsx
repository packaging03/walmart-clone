type Props = {
  searchParams: {
    q: string;
  };
};
function SearchPage({ searchParams: { q } }: Props) {
  return <div>SearchPage</div>;
}

export default SearchPage;
