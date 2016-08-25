pub struct Allergies {
    allergens: u32,
    
}

impl Allergies {
    pub fn new(allergen_score: u32) -> Allergies {
        Allergies {allergens: allergen_score}
    }
    
    pub fn is_allergic_to(&self, allergy: &Allergen) -> bool{
        let a = allergy.clone() as u32;
        a & self.allergens != 0
    }
    
    pub fn allergies(&self) -> Vec<Allergen>{
        use Allergen::*;
        let list = vec![Eggs, Peanuts, Shellfish, Strawberries, Tomatoes, Chocolate, Pollen, Cats];
        list.into_iter().filter(|a| self.is_allergic_to(&a)).collect()
        
    }
}


#[derive(Clone, PartialEq, Debug)]
pub enum Allergen {
    Eggs = 1,
    Peanuts = 2,
    Shellfish = 4,
    Strawberries = 8,
    Tomatoes = 16,
    Chocolate = 32,
    Pollen = 64,
    Cats = 128,
}
