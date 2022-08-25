import cn from 'clsx';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import P from '@components/Typography/P';
import { linkBtnCls } from '@components/BtnLink';
import BlinkingCursor from '@components/BlinkingCursor';

const sectionLabel = 'header-heading';
const linkCls = cn(
    'p-2 rounded-md',
    'text-2xl text-gray-600 hover:text-black',
    'hover:bg-gray-200',
);

export default function Header() {
    return (
        <section id="header" aria-labelledby={sectionLabel}>
            <h1
                id={sectionLabel}
                className={cn(
                    'text-3xl sm:text-4xl md:text-5xl font-medium !leading-snug',
                    'max-w-xl md:max-w-3xl',
                    'mb-6',
                )}
            >
                <strong
                    className={cn(
                        'block',
                        'font-extrabold text-4xl sm:text-5xl md:text-6xl',
                        'mb-4',
                    )}
                >
                    I&apos;m Abdullah
                    <BlinkingCursor type="_" />
                </strong>{' '}
                A dev with a passion to make the web a cooler place.
            </h1>
            <article>
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                    repudiandae, veniam dolore sit ipsa nostrum, laboriosam assumenda
                    voluptates voluptate provident est sunt pariatur odio vel corrupti
                    excepturi consectetur nihil voluptatibus.
                </P>
                <P>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                    repudiandae, veniam dolore sit uptatibus.
                </P>
            </article>
            <div className={cn('flex gap-2 flex-wrap')}>
                <a
                    href="https://www.github.com/AbdullahZeidan"
                    target="blank"
                    rel="noreferrer noopener"
                    className={linkCls}
                    aria-label="GitHub"
                    title="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/abdullah-z-b4653a213/"
                    target="blank"
                    rel="noreferrer noopener"
                    className={linkCls}
                    aria-label="LinkedIn"
                    title="LinkedIn"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="mailto:abdullahzeidan@gmail.com"
                    className={cn('flex items-center gap-2', linkBtnCls)}
                >
                    <MdAlternateEmail /> Email Me
                </a>
            </div>
        </section>
    );
}
