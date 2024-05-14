describe( "test ejemplo",() =>{


    
    it.only ("verificacion de ingreso de login", () =>{
    
        cy.visit("https://qp-ehs-externo.saviasoft.com/")
        cy.get('#username').type("usrext")
        cy.get('#password').type("123456")
        cy.get('#kc-login').click()
        cy.get(':nth-child(2) > .tarjeta').click()
        cy.get('.justify-end > .bg-azul').click()
        cy.get(':nth-child(2) > :nth-child(1) > .w-full > .flex-1').type("Pruebas")
        cy.get(':nth-child(3) > :nth-child(1) > .w-full > .flex-1').type("Pruebas")
        cy.get(':nth-child(4) > :nth-child(1) > .w-full > .flex-1').type("15")
        cy.get(':nth-child(5) > :nth-child(1) > .border > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type("22")//podemos colocar la fecha
        cy.get(':nth-child(6) > :nth-child(1) > .border > .react-datepicker-wrapper > .react-datepicker__input-container > .w-full').type("29/04/2024")
        cy.get(':nth-child(7) > :nth-child(1) > .react-time-picker > .react-time-picker__wrapper > .react-time-picker__inputGroup').type("12:20")
        cy.get(':nth-child(8) > :nth-child(1) > .react-time-picker > .react-time-picker__wrapper > .react-time-picker__inputGroup').type("18:20")
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .w-full').select("N")    
        cy.get(':nth-child(10) > :nth-child(1) > .border > .flex-1').type("Pruebas")
        cy.get('#chk_items_maquinaria_5').click()
        cy.get('.bg-azul > span').click()
        cy.get('.toast-message').contains("exitosa")

    })

    it ("validar 3", () =>{
    
    
    })
    
    
    })
