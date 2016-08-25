pub fn square_of_sum(input: i32) -> i32 {
    let a = (1..input+1).collect::<Vec<i32>>();
    //println!("{:?}",&a);
    do_summing(&a)*do_summing(&a)
}
pub fn sum_of_squares(input: i32) -> i32 {
    let a = (1..input+1).map(|x| x*x).collect::<Vec<i32>>();
    do_summing(&a)
}
pub fn difference(input: i32) -> i32 {
    square_of_sum(input)-sum_of_squares(input)
}

fn do_summing(input: &Vec<i32>) -> i32 {
    let mut running_tot = 0;
    for c in input {
        running_tot += *c;
    }
    running_tot
}