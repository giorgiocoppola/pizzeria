import Pizza from './components/Pizze'
import './App.css'

const pizza1 = {
  nome : "Pizza Capricciosa",
  img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOAZntvj3NWSy-9tPdojZZMVC98qg0EMwHM9gil7cygAXznbN1b2fuMP2_W7aPA_avUlwAnEC7bJtKWBXNuoCq-ZkLqJsoWnmzdAVFOls8EsaBsCVSPuP3aw&usqp=CAE",
  ingredienti:"pomodoro,mozzarella,prosciutto cotto,funghi,olive e carciofini",
  prezzo: 6.50,
}

const pizza2 = {
  nome : "Pizza 4 formaggi",
  img : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJE-bBU2LhBvQEGezSh6WEFbI_Mmfz5y1-gS6YagzmSMyQP_f1EVtOEhO8yL7Vd1bW99s2jCiFs8nzVZKsGuxsiLpGp-zThHX1WX_da4DsSQWIUVZM54au&usqp=CAE",
  ingredienti:"pomodoro,mozzarella e gorgonzola",
  prezzo: 8.75,
}

const pizza3 = {
  nome : "Pizza Margherita",
  img : "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-IE2ayE82eyyAUIf84GlmcTQ6AX5I-ffkAEDa_bUQUUUtC3oveEQpra2qwAUyZUipuS6I4yVL1TaTTXyM6D7EDd6-ZHxwvNDccuBDS-JjWw9Rj2haYODE&usqp=CAE",
  ingredienti: "pomodoro e mozzarella",
  prezzo: 3.43,
}

const pizza4 = {
  nome : "Pizza Diavola",
  img : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2JyPBTRZI719B8sYtHuqO11Vgtc4025kKhZnRw4uBFOOQE4rffqulRvR-hJ04ivMwPWgsJyx1LL3g7rBX1KjOnLB_TnoGK4gNDID57plFO7t-AZl6brdkuQ&usqp=CAE",
  ingredienti: "pomodoro,mozzarella e salsiccia piccante",
  prezzo: 4.00,
}

const pizza5 = {
  nome : "Pizza Romana",
  img : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVK07iiaxU0A___q5qJOwWSgAzD4-tjwZUEm-n7SkHeckMJvKki5R5rlOM60AO3MMMgvygkb6m6cMWSndaPl1o_cx7X7omuA&usqp=CAE",
  ingredienti:"pomodoro,mozzarella,acciughe,\n capperi e olive nere",
  prezzo: 5.80,
}

const pizza6 = {
  nome : "Pizza Bufala",
  img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAvk0lG1weN_iyFy6iCtGrQh5HLz_r981o2MbxSaQGVd851Q6uL0S_oxRqWR-a1DlI9L8KtySvIIM5wMS2rk0DC-8m-LG4LhClBgoNvsYw7LW2kN4-CcVm&usqp=CAE",
  ingredienti: "pomodoro e mozzarella di bufala",
  prezzo: 5.74,
}

const pizza7 = {
  nome : "Pizza Marinara",
  img : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4UWFJYzn3lpwi_bVXI2Y3r0altOhitbd9zOdAJaxwP-WVMKQcZ4WvKUid7xto6cxRbITXhSn0YIWmWGUpgPT3q2aW4F8v_NUKeOmiPglWsCvRieKjgoCy4g&usqp=CAE",
  ingredienti:"pomodoro,aglio,origano e olio",
  prezzo: 7.45,
}

const pizza8 = {
   nome : "Pizza 4 Stagioni",
   img : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkqps-6O25MyKEHBYeXlThvPVQIEn2fg5JV6ky4OGz8e542MD_pwgNdyGW-V9m_ZOBZA7YaMSz_NxqDC6r6YJgRQOm0SFc&usqp=CAE",
   ingredienti:"pomodoro,mozzarella,prosciutto cotto,carciofini sott'olio e funghi",
   prezzo: 6.15,
  }
  



function App() {
  return (
    <div className="App">
        <h1>Pizze d'alta qualita'</h1>
      <section className="App-section">
   
        <Pizza {...pizza1} />
        <Pizza {...pizza2} />
        <Pizza {...pizza3} />
        <Pizza {...pizza4} />
      </section>
      <section2 className="App-section">
        <Pizza {...pizza5} />
        <Pizza {...pizza6} />
        <Pizza {...pizza7} />
        <Pizza {...pizza8} />
      </section2>
    </div>
  );
}

export default App;
