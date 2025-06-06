// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image'
import Logo from '../../public/logo.png'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-purple-50 to-white">
            <div className="container mx-auto px-4 py-[50px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center min-w-max">
                            <Link href="/" className="relative flex items-center gap-2.5">
                                <Image src={Logo} alt="logo" className="w-auto h-[85px]" />
                            </Link>
                        </div>
                        <p className="mb-4">Your trusted partner for amazing services and products. Your trusted partner for amazing services and products.</p>
                        <p className="mb-4">Your trusted partner for amazing services and products. Your trusted partner for amazing services and products.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#714B67]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-[#714B67]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-[#714B67]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="text-[#714B67]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#714B67]">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-[#000] hover:text-[#714B67] font-medium transition-colors">Home</Link></li>
                            <li><Link href="/" className="text-[#000] hover:text-[#714B67] font-medium transition-colors">Portfolio</Link></li>
                            <li><Link href="/" className="text-[#000] hover:text-[#714B67] font-medium transition-colors">Services</Link></li>
                            <li><Link href="/" className="text-[#000] hover:text-[#714B67] font-medium transition-colors">Company</Link></li>
                            <li><Link href="/" className="text-[#000] hover:text-[#714B67] font-medium transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#714B67]">Contact Us</h3>
                        <address className="not-italic">
                            <p className="mb-2 text-[#000]">Lorem Ipsum is simply dummy</p>
                            <p className="mb-2 text-[#000]">Ipsum has been the industry</p>
                            <div className='flex align-middle mb-2'>
                                <p className="text-[#714B67] font-bold">Email: </p>
                                <a href="mailto::info@example.com" className='ml-[5px] text-[#714B67]'>info@example.com</a>
                            </div>
                            <div className='flex align-middle mb-2'>
                                <p className="text-[#714B67] font-bold">Phone:</p>
                                <a href="tel::(123) 456-7890" className='ml-[5px] text-[#714B67]'>(123) 456-7890</a>
                            </div>
                        </address>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
                    <p className='text-[#000]'>&copy; {new Date().getFullYear()} Codesphere. All rights reserved.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/" className="hover:text-[#714B67] text-[#000] transition-colors">Privacy Policy</Link>
                        <Link href="/" className="hover:text-[#714B67] text-[#000] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}