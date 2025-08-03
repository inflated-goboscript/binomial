costumes "blank.svg";

%include inflator/assert
%include inflator/binomial

onflag {main;}
proc main {
    assert_eq binomial(12, 7), 792, "binomial";
}
