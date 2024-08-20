import { useState } from 'react';
import Image from 'next/image';
import styles from './Newsletter.module.css';
import Features from './Features';

export default function NewsletterBox() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start preloader
        setMessage(''); // Clear previous messages

        try {
            const res = await fetch('https://propvator-email.vercel.app/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setMessage('Subscription successful!');
                setMessageType('success');
            } else {
                setMessage('Subscription failed. Please try again.');
                setMessageType('error');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
            setMessageType('error');
        } finally {
            setLoading(false); // Stop preloader
            setEmail(''); // Clear email input
        }
    };

    return (
        <div className={styles.newsletterWrapper}>
            <form onSubmit={handleSubmit}>
                <div className='w-full md:w-10/12 mx-auto flex flex-wrap justify-center'>
                    <input 
                        type="email" 
                        placeholder='Enter your email address' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <button type='submit' className='flex items-center justify-center p-2 text-center' disabled={loading}>
                        {loading ? (
                            <span className="loader"></span> // Preloader
                        ) : (
                            <>
                                Subscribe 
                                <Image className='ml-1' src='/Images/Global/send.svg' width={20} height={20} />
                            </>
                        )}
                    </button>
                </div>
            </form>
            {message && (
                <p 
                    className={`w-full md:w-10/12 mx-auto text-center mt-4 ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}
                >
                    {message}
                </p>
            )}
            <div className='w-full sm:w-10/12 md:w-10/12 mx-auto flex flex-wrap gap-y-3 justify-center mt-10'>
                <Features title='latest pop news' img='/Images/icons/latest.svg' />
                <Features title='Launch details' img='/Images/icons/launch.svg' />
                <Features title='Giveaway Info' img='/Images/icons/giveaway.svg' />
                <Features title='The Best Offers' img='/Images/icons/latest.svg' />
            </div>
        </div>
    );
}
