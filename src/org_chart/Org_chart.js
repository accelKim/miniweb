import { Tree, TreeNode } from 'react-organizational-chart';
import styled from "styled-components";
import "../css/tree.css";
import { React, useState } from "react";

const StyledNode = styled.div`
  padding: 5px;
  display: inline-block;
  border: 2px solid blue;
  border-radius: 8px;
  color: black;  
`
  ;
  const TreeStyle = {
   color: 'white',
  }

function Org_chart() {
  // 상태 변수를 초기값으로 닫힌 상태를 가지도록 설정
  const [isOpen, setIsOpen] = useState(Array(9).fill(false)); // 9개 노드를 가정

  // 토글 함수를 생성하여 각 드롭다운 노드의 상태를 열고 닫을 수 있도록 합니다
  const toggleDropdown = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };
  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'skyblue'}
      lineBorderRadius={'10px'}
      label={<StyledNode className='main' style={TreeStyle}>총장</StyledNode>}>

      <TreeNode label={<StyledNode>총괄부총장</StyledNode>}>
        <TreeNode label={<StyledNode>정화건학이념아카데미</StyledNode>}></TreeNode>
        <TreeNode label={<StyledNode>교무위원회</StyledNode>}></TreeNode>
        <TreeNode label={<StyledNode></StyledNode>}>
          <TreeNode label={<StyledNode>학사부총장</StyledNode>}>
            <TreeNode label={<StyledNode onClick={() => toggleDropdown(0)}>
              교무처🔽
              {isOpen[0] && (
                <TreeNode label={<StyledNode>
                  교무과:031-000-0000<br></br>
                  학적과:031-111-1111
                </StyledNode>}></TreeNode>
              )}
            </StyledNode>}>
              <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(1)}>
                입학홍보처🔽
                {isOpen[1] && (
                  <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                    입학과:031-222-2222<br></br>
                    학적과:031-333-3333
                  </StyledNode>}></TreeNode>
                )}
              </StyledNode>}>
                <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(2)}>
                  학생처🔽
                  {isOpen[2] && (
                    <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                      학생처:031-444-4444
                    </StyledNode>}></TreeNode>
                  )}
                </StyledNode>}></TreeNode>
              </TreeNode>
            </TreeNode>
          </TreeNode>
          <TreeNode style ={TreeNodeStyle} label={<StyledNode>기획부총장</StyledNode>}>
            <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(3)}>
              기획처🔽
              {isOpen[3] && (
                <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                  기획처:031-555-5555
                </StyledNode>}></TreeNode>
              )}
            </StyledNode>}></TreeNode>
          </TreeNode>
          <TreeNode style ={TreeNodeStyle} label={<StyledNode></StyledNode>}>
            <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(4)}>
              총무처🔽
              {isOpen[4] && (
                <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                  총무처:031-666-6666
                </StyledNode>}></TreeNode>
              )}
            </StyledNode>}></TreeNode>
          </TreeNode>
          <TreeNode style ={TreeNodeStyle} label={<StyledNode>학부</StyledNode>}>
            <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(5)}>
              미용예술학부🔽
              {isOpen[5] && (
                <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                  미용전공<br></br>
                  메이크업전공<br></br>
                  뷰티네일전공
                </StyledNode>}></TreeNode>
              )}
            </StyledNode>}>
              <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(6)}>
                융합예술학부🔽
                {isOpen[6] && (
                  <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                    ·영상제작전공<br></br>
                    ·디지털미디어디자인전공
                  </StyledNode>}></TreeNode>
                )}
              </StyledNode>}>
                <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(7)}>
                  디저트조리학부🔽
                  {isOpen[7] && (
                    <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                      ·디저트베이커리전공<br></br>
                      ·조리전공
                    </StyledNode>}></TreeNode>
                  )}
                </StyledNode>}></TreeNode>
              </TreeNode>
            </TreeNode>
          </TreeNode>
          <TreeNode style ={TreeNodeStyle} label={<StyledNode>부속/부설기관</StyledNode>}>
            <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(8)}>학술정보관🔽
              {isOpen[8] && (
                <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                  학술정보관:031-777-7777
                </StyledNode>}></TreeNode>
              )}
            </StyledNode>}>
              <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(9)}>전산정보실🔽
                {isOpen[9] && (
                  <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                    전산정보실:031-888-8888
                  </StyledNode>}></TreeNode>
                )}
              </StyledNode>}>
                <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(10)}>커리어매니지먼트센터🔽
                  {isOpen[10] && (
                    <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                      커리어매니지먼트센터:031-999-9999
                    </StyledNode>}></TreeNode>
                  )}
                </StyledNode>}>
                  <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(11)}>교수학습센터🔽
                    {isOpen[11] && (
                      <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                        교수학습센터:031-010-1010
                      </StyledNode>}></TreeNode>
                    )}
                  </StyledNode>}>
                    <TreeNode style ={TreeNodeStyle} label={<StyledNode onClick={() => toggleDropdown(12)}>평생교육원🔽
                      {isOpen[12] && (
                        <TreeNode style ={TreeNodeStyle} label={<StyledNode>
                          평생교육원:031-020-0202
                        </StyledNode>}></TreeNode>
                      )}
                    </StyledNode>}></TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode style ={TreeNodeStyle} label={<StyledNode>대외협력실</StyledNode>}></TreeNode>
        <TreeNode style ={TreeNodeStyle} label={<StyledNode>비서실</StyledNode>}></TreeNode>
      </TreeNode>
    </Tree>
  );
}

const TreeNodeStyle = {
 color: '#2F4F4F',
}

export default Org_chart;