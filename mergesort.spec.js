describe('split', function(){

  it('handles an empty array', function(){
    expect( split([]) ).toEqual( [] );
  });

  it('handles an single array', function(){
    expect( split(['a']) ).toEqual( [['a']] );
  });

  it('handles a multi-element array', function(){
    expect( split(['a', 'b', 'c', 'd']) ).toEqual( [['a'], ['b'], ['c'], ['d']] );
  });

})


describe('mergeSort', function(){

  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an single array', function(){
    expect( mergeSort(['a']) ).toEqual( ['a'] );
  });

  it('handles an single multi-level array', function(){
    expect( mergeSort([[['a']]]) ).toEqual( ['a'] );
  });

  it('handles a multi-element array', function(){
    expect( mergeSort([['d'], ['e'], ['z'], ['a']] ) ).toEqual( ['a', 'd', 'e', 'z'] );
  });

})
