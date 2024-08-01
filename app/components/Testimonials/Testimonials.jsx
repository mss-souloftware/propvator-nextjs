import Slides from './Slides';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    return (
        <div className="md:px-0 px-3">
            <div className="container mx-auto my-16">
                <h3 className={styles.Testimonials}>
                    Customer Testimonials
                </h3>
            </div>
            <div className="my-8">
                <Slides />
            </div>
        </div>
    );
}
