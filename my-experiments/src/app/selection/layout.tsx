export default function Layout({ children, films, series }: { children: React.ReactNode, films: React.ReactNode, series: React.ReactNode }) {
  return (
    <div>
      {children}
      {films}
      {series}
    </div>
  )
}
