import { useParams } from "react-router-dom"

function CourseDetailPage() {


    const coursename = useParams()

    console.log(coursename)

 

    return(
        <>

        <h1>Course Detail page of  : {coursename.name} </h1>
        </>
    )
}

export default CourseDetailPage