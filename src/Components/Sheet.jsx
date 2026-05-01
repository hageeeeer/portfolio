import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../Components/ui/sheet";


export default function SheetDemo() {
  return (

    <Sheet>
      <SheetTrigger>

        <svg width={30} className="cursor-pointer absolute z-40 right-10 top-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#fff" d="M96 128C78.3 128 64 142.3 64 160C64 177.7 78.3 192 96 192L182.7 192C195 220.3 223.2 240 256 240C288.8 240 317 220.3 329.3 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L329.3 128C317 99.7 288.8 80 256 80C223.2 80 195 99.7 182.7 128L96 128zM96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L342.7 352C355 380.3 383.2 400 416 400C448.8 400 477 380.3 489.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L489.3 288C477 259.7 448.8 240 416 240C383.2 240 355 259.7 342.7 288L96 288zM96 448C78.3 448 64 462.3 64 480C64 497.7 78.3 512 96 512L150.7 512C163 540.3 191.2 560 224 560C256.8 560 285 540.3 297.3 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L297.3 448C285 419.7 256.8 400 224 400C191.2 400 163 419.7 150.7 448L96 448z" /></svg>

      </SheetTrigger>
      <SheetContent className="bg-[#191919] border-0 text-brdr-color">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className="relative top-20 ">
            <ul className="list-unstyled  mx-auto my-5 w-2/3">

              <li className="flex items-center gap-3 cursor-pointer">
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(40, 233, 140)" d="M240 6.1c9.1-8.2 22.9-8.2 32 0l232 208c9.9 8.8 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-8-7.2 0 205.3c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-205.3-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9L240 6.1zm16 50.1L96 199.7 96 448c0 8.8 7.2 16 16 16l48 0 0-104c0-39.8 32.2-72 72-72l48 0c39.8 0 72 32.2 72 72l0 104 48 0c8.8 0 16-7.2 16-16l0-248.3-160-143.4zM208 464l96 0 0-104c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 104z" /></svg>
                <span className="hover:text-white transition-colors duration-1000">Home</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer my-5">
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path
                  fill="rgb(40, 233, 140)"
                  d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z" /></svg>
                <span className="hover:text-white transition-colors duration-1000">About</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer my-5">
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path
                  fill="rgb(40, 233, 140)" d="M176 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-240-88 0c-39.8 0-72-32.2-72-72l0-88zM316.1 160L224 67.9 224 136c0 13.3 10.7 24 24 24l68.1 0zM0 64C0 28.7 28.7 0 64 0L197.5 0c17 0 33.3 6.7 45.3 18.7L365.3 141.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" /></svg>
                <span className="hover:text-white transition-colors duration-1000">Resume</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer my-5">
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                  fill="rgb(40, 233, 140)" d="M0 88C0 74.7 10.7 64 24 64l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 112C10.7 112 0 101.3 0 88zM64 256c0-13.3 10.7-24 24-24l400 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L88 280c-13.3 0-24-10.7-24-24zM448 424c0 13.3-10.7 24-24 24L24 448c-13.3 0-24-10.7-24-24s10.7-24 24-24l400 0c13.3 0 24 10.7 24 24z" /></svg>
                <span className="hover:text-white transition-colors duration-1000">Services</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer my-5">
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                  fill="rgb(40, 233, 140)" d="M188.3 176L323.7 176 256 63.1 188.3 176zM256 0c11.2 0 21.7 5.9 27.4 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2S363.5 224 352 224l-192 0c-11.5 0-22.2-6.2-27.8-16.2s-5.5-22.3 .4-32.2l96-160C234.3 5.9 244.8 0 256 0zM128 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-176a112 112 0 1 1 0 224 112 112 0 1 1 0-224zM336 432l96 0 0-96-96 0 0 96zm-8-144l112 0c22.1 0 40 17.9 40 40l0 112c0 22.1-17.9 40-40 40l-112 0c-22.1 0-40-17.9-40-40l0-112c0-22.1 17.9-40 40-40z" /></svg>
                <span className="hover:text-white transition-colors duration-1000">Skills</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer my-5">
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                  fill="rgb(40, 233, 140)" d="M88 96c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0zM280 224l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40zm192 0l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40zm0 192l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40zM280 288c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0zM88 416l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40z" /></svg>
                <span className="hover:text-white transition-colors duration-1000">Portfolio</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer my-5">
                <svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                  fill="rgb(40, 233, 140)" d="M61.4 64C27.5 64 0 91.5 0 125.4 0 126.3 0 127.1 .1 128L0 128 0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256-.1 0c0-.9 .1-1.7 .1-2.6 0-33.9-27.5-61.4-61.4-61.4L61.4 64zM464 192.3L464 384c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-191.7 154.8 117.4c31.4 23.9 74.9 23.9 106.4 0L464 192.3zM48 125.4C48 118 54 112 61.4 112l389.2 0c7.4 0 13.4 6 13.4 13.4 0 4.2-2 8.2-5.3 10.7L280.2 271.5c-14.3 10.8-34.1 10.8-48.4 0L53.3 136.1c-3.3-2.5-5.3-6.5-5.3-10.7z" /></svg>
                <span className="hover:text-white transition-colors duration-1000">Contact</span>
              </li>
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
