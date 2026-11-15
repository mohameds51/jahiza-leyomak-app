import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'جاهزة ليومك | خطة زفافك',description:'خطتك الشخصية لاستعدادات آخر 30 يوم قبل الزفاف'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
