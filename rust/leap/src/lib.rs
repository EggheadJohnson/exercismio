pub fn is_leap_year(year_to_test: u32) -> bool {
    year_to_test % 4 == 0 && (year_to_test % 100 != 0 || year_to_test % 400 == 0)
}