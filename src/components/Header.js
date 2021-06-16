import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
        alert('click')
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'close' : 'add'} 
                onClick={onAdd} />
        </header>
    )
}

export default Header