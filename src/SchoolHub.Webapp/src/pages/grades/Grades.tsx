function Grades() {

    return (
        <section style={{marginTop: 25}}>
            
            <select>
                {Array.from({length: 8}, (_, index) => index + 1).map((element) => <option>Semester {element}</option>)}
            </select>
        </section>
    );
}

export default Grades;