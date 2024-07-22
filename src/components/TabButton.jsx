export default function TabButton({children,click, ...props}){


    return(
        <li><button className={click ? 'active' : ''} {...props}>{children}</button></li>
    )
}