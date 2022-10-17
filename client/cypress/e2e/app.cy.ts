describe('Navigation', () => {
  it('should navigate to the movies page', () => {
    cy.visit('/directors');
    cy.get('a[href="/movies/"]').click();
    cy.url().should('include', '/movies');
  });

  it('should navigate to the directories page', () => {
    cy.visit('/');
    cy.get('a[href="/directors/"]').click();
    cy.url().should('include', '/directors');
  });

  it('should navigate to the movie details', () => {
    cy.visit('/');
    cy.get(
      'img[src="https://s4.vcdn.biz/static/f/4397461951/image.jpg/pt/r300x423x4"]'
    ).click();
    cy.url().should('include', '633189d9ecb35b098e7a58e7');
    cy.get('[data-testid="title"]').should(
      'contain.text',
      'Inglourious Basterds'
    );
  });

  it('should navigate to the director details', () => {
    cy.visit('/directors');
    cy.get(
      'img[src="https://kinopoisk-ru.clstorage.net/lia164162/7423aaTQ/TN_G_q4Ibcc_GCkA6S8T6U-KAgGqdJJhTunYO47Axf9NEAAfhIHwIx4g9Pi7gp0oytnLi69MmWIeOmixUakgAbgb5s-OLZzjz63s5G3qRpyK28akH2BGhcvdmeq7xSANvhKDPROjk9GcIjLs34acvQ8sf4_P3GhHr7sspnINMDQsD-TfnVrvoeyI2oTYf5KaD5lmobs1FEJ_uCyZLPE2Tj6S0b9xUgOhrMPybx_kqQw-jkwe3XyaRfhqT4UzOVMknu_EvvzpjpHsiIsUiJ0gO_55pkG7tRSgP6uMKDzxBc98c6PcYBPik71iQK-epmkeva5NDZwuO1QIa32242hRRkwvx_1uO2_irViJJUkuURoM6hTCyzUGA20qrPlN8qfMHVJxnDNy4DGP0SMsDCRJ_K9_7C3efOnHO6mO5KBZA7XtbkbM3Ng8cc7aOwQ7jCAqTMjkM5h3VZFcK6xIXKIEL08CoF5RIZKTTIDy3C61qN6db5ze7_7LBlk4HyezWlDVv42kn28Lv_FfmBtWagxzaX2ZVDLKpETwbSmNyS1CRd4vQ6I8YPNAcX3wch7ul7huPU2MHIxf2mXLCP82gnlQlRzsVEyti-7DX1q4pjqf4kodyyVhyDdG0FyZrtgccMRNPTAybnIyINGMgpA-7FUqP9_vjy6OfHuFuTs-ZtE6oHasPeXMbskuQs1KW2YZj_J6Xnu2Mxg1VFOcqYxJ3tFmby7TEqyQYcIALqLQnNy1qH2en7-dnC5LtkubPySAWfOmbr4WvowLXcNPunuWui_TSg_JF0AKFOfzf-gc-bwBZq59UKAP4PNB8m1AIY2cZnotbTzcHlwMeNZKyjyE0HgSRZwslr2-qC3RvzpItPntQIlPGfVhC7Tngb_KHjus0sRcj3Bzr8EjEJB-sFA9jgUaP-7-XP4P35unaYqtRhKZY7RODIfNvWrPolzqCTVofzBaDfqnoStFB-OsqT5pbLN1PN7hEYwS8BIQL1DhXqwleV7tfHxs35yY1Gn4PKbji_DW7d40vI87XXO92ntnGs3R-X8LR7BqRbRjDxoeSl3w5ew_ITA8UQPAg71igC_vhuoMj47s7i5v2xepym1FwatgxF6fJt1M-V-DHel7dxj_8oifqoaxqqRWsx_YrfitEmRdP6GBbqHBQ6KcwaEOjlSaHy6dzE9erZmlK9iNVpGZogU8fSaczglt8X24iVTpndH4L1qkU6rV9QB86s1KvGIWfW1TE42igyPj70LhL41U-w9vTRx8Xc2Z91hbP3cB2EOFrlzlb_0YX7B-yruWmu4yKI94ptDaV7cRn4n-eLwxR83dwqP-UfFBc45iMw1N1Xitry3fbc5d6VS52uzE8VmCh5_vN07tCHwQnyvrVyqMo5vNCiZzGGVFkd6IzUm9A3aM3rBjTrJiInEc4IBMv2e4Lc-OLm-sLbuUuktuVPE50LTcTQXPLRnd4TzKS3TIrmPKnKtGcDp0xIHM6s9qPgCWnu8wo-1gYzADfQJATQy3GH9vTRx9nh7pNrk5XeczqKMG7Py2zf1J_7Kt-XoHWEwD237YxMMYxfcBjJhemx1BBnxsQaJfQqBxgj4AEl1Mp7js3UwtPJ3MWbfbaI3H4pvSt_-85gzMqd3hbNh7B0htMqiNK9WxKOU2wc773mlOgSQcf6EwX3KjcWJsMDFv3AUrL23eHl4sjok16CqvFuGpoDUeX5d8fSuOY4xbOOY7zZBrjzjWQ6hlZ8Gt6B3qbsKF3qyQUAxiMaGB7OMAHq2V-D3eLg-sfA5rh7pIvdVxedL0_p61j2zaX2HtK1mXiv2zO-zLFXF4BSUDL-pt2H0RJWz8QGKvkKBioA6QwR4-Zpn_DIy_rbx9yDaYyOzVsThApo_dhh5uuOwxTytohjp-Umicyieh6wUHkc2KrWmtUSXtLHMzXZMh46Iu0oJ9LZcZf4wfr13OjNj2eji_VXCIsQf_jdT9rHm847-qubQpHmCrHzgUM9sHBxAOqq9oDjK17v0T871TQlBDniIjHx_m2G1_7R7crX_5l_lLnMSzucFkTK-H7n8LfBLca-m1Oz8xam_JZ2F4lSShTaptu89SVA_twmA_QfLCcS3CI588VqrNDr-frK9-Wha7iRx1ARgCxkz89pyvaXwRPPsLJWjMI8gNSLVieIRWA14pHllfAjQ8j1OD7_HwY7Oc8OB9j1WpLa_fjN59vdgXOtrv57DrYGZMD4S_Ton-kQ6Y-lVbH0MZbUrVkdkUVEF-28x4XNGnjv_xkb_wk_OBniJjrQ6WSPwvHn0_3R5adQjIr3QQ6FGH3B3nj0xIT_Ed6grmKK6gKF7qFNJqFURh_PnOuw4yRl0tg9P98jEiU-4wgayPxyjPTh3MXvyu6gY7CxxXU2qhtx6MZi-uSx-gjZjbZPvPwbpOeLSx-SdE0a8a_lgOcnVPD_JQvcCD0qFNUjLPzlcrP24tH83OH7vXagsc9IDZoESMbSb-zPk-4R3pa7QoD5M4P2gG0xjnF6BOSG77jnOEnI2iwH_jY1HxPjDC7IwHiT1f3C-PTAx5lop7XUfjm5DVzA-Hva2L_oE-uAgVWs-zGJzaB6B5t_czHjueyJyS9z5skqHOcILBkI3AEa4OB7tNPX78Ti3OGvc4eWzGEbhCVp49tL09Ci5QX-gYhUkuUqn-y9ZAaBf0QLz4bYo90Ec_LnHyDyBzI3Oe8SFu78daH66N_x4cjCnVS6uvV1Eb4TQ_vuauj2mNU75bSPQ4_2OZfvoFwyqHhdMc69-LXsLXTh_C8Z-Q0CDQrpHwTD_HiH997r1cvg265BrZrZVjeGI1nl5VrIwofnOMmSsmmS5DGUxbVmO6B4YAvmnsK1xyFD4tAKEckmEyE87xwo-d5Yi_bV6MP2x8W1SZOD21s-gyFS1vpc5vad4T_KsJJ4iOQCtdiyYiWuTFw94or5p_YlafHOKDn4ITUlCdQpJu32Vqvt9MfkyPf5p2a0i9M"]'
    ).click();
    cy.url().should('include', '633187b8ecb35b098e7a58de');
    cy.get('[data-testid="title"]').should('contain.text', 'Guy Ritchie');
  });
});

export {};
