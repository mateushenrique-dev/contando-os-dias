import '../theme/colors.css';
import '../theme/global.css';

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '700', '800'],
  variable: '--poppins',
  style: ['italic', 'normal'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Contando os dias',
  description: 'Contador de dias de uma data definida',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
