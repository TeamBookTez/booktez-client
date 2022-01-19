{answer2.children?.map((question3, idx) => (
                                <article key={`q3-${idx}`}>
                                  <StFirstQuestion>
                                    <LabelQuestion bgColor={theme.colors.orange400} />
                                    {question3.question}
                                  </StFirstQuestion>
                                  {question3.answer?.map((answer3, idx) => (
                                    <React.Fragment key={`a3-${idx}`}>
                                      <StAnswer>{answer3.text}</StAnswer>

                                      {/* ! depth 4 !  */}
                                      {answer3.children?.map((question4, idx) => (
                                        <article key={`q4-${idx}`}>
                                          <StFirstQuestion>
                                            <LabelQuestion bgColor={theme.colors.orange500} />
                                            {question4.question}
                                          </StFirstQuestion>
                                          {question4.answer?.map((answer4, idx) => (
                                            <React.Fragment key={`a4-${idx}`}>
                                            <StAnswer>{answer4.text}</StAnswer>
                                          ))}
                                        </article>
                                      ))}
                                      
                                    </React.Fragment>
                                  ))}
                                </article>
                              ))}