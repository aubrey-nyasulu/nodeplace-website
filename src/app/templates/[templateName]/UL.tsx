import Li from "./Li"

export default function UL() {
    return (
        <section className="pt-4">
            <p className="pb-1">
                This template provides a solid foundation for building RESTful APIs with Nodeplace. It includes:
            </p>
            <ul className="list-none pl-2 space-y-2">
                <Li>
                    Core CRUD Operations: Pre-built routes and controllers for handling GET, POST, PUT, PATCH, and DELETE requests for a basic "Post" resource.
                </Li>
                <Li>
                    Database Integration: Connects to a MongoDB database using Mongoose.
                </Li>
                <Li>
                    Data Validation: Basic data validation is implemented within the controller functions.
                </Li>
                <Li>
                    Error Handling: Robust error handling middleware to gracefully handle unexpected situations.
                </Li>
                <Li>
                    Clean Architecture: Follows a well-structured architecture with clear separation of concerns between routes, controllers, and models.
                </Li>
                <Li>
                    Easy Customization: Highly customizable to fit your specific project needs.
                </Li>
            </ul>
            <p className="pb-1 pt-4">
                Key Features:
            </p>
            <ul className="list-none pl-2 space-y-2">
                <Li>
                    RESTful API Design: Adheres to REST principles for a clean and maintainable API.
                </Li>
                <Li>
                    Asynchronous Handling: Utilizes async/await for efficient asynchronous operations.
                </Li>
                <Li>
                    Modular Structure: Organized into well-defined modules for better code organization and reusability.
                </Li>
                <Li>
                    Comprehensive Documentation: Includes clear and concise documentation to help you get started quickly.
                </Li>
            </ul>
            <p className="pb-1 pt-4">
                This template is ideal for developers who want to:
            </p>
            <ul className="list-none pl-2 space-y-2">
                <Li>
                    Quickly build RESTful APIs with Nodeplace.
                </Li>
                <Li>
                    Learn best practices for building Node.js applications.
                </Li>
                <Li>
                    Explore the capabilities of the Nodeplace framework.
                </Li>
            </ul>
        </section >
    )
}
