﻿define({ entries : {
    "10.1145/3299819.3299820": {
        "abstract": "Gomoku is an ancient board game. The traditional approach to solving the Gomoku is to apply tree search on a Gomoku game tree. Although the rules of Gomoku are straightforward, the game tree complexity is enormous. Unlike other board games such as chess and Shogun, the Gomoku board state is more intuitive. This feature is similar to another famous board game, the game of Go. The success of AlphaGo [5, 6] inspired us to apply a supervised learning method and deep neural network in solving the Gomoku game. We designed a deep convolutional neural network model to help the machine learn from the training data. In our experiment, we got 69% accuracy on the training data and 38% accuracy on the testing data. Finally, we combined the trained deep neural network model with a hard-coded convolution-based Gomoku evaluation function to form a hybrid Gomoku artificial intelligence (AI) which further improved performance.",
        "address": "New York, NY, USA",
        "author": "Yan, Peizhi and Feng, Yi",
        "booktitle": "Proceedings of the 2018 Artificial Intelligence and Cloud Computing Conference",
        "doi": "10.1145/3299819.3299820",
        "isbn": "9781450366236",
        "keywords": "type:technique,evaluation:case study,Gaming Algorithm:neural network model",
        "location": "Tokyo, Japan",
        "numpages": "5",
        "pages": "48\u201352",
        "publisher": "Association for Computing Machinery",
        "series": "AICCC '18",
        "title": "A Hybrid Gomoku Deep Learning Artificial Intelligence",
        "type": "inproceedings",
        "url": "https://doi.org/10.1145/3299819.3299820",
        "year": "2018"
    },
    "10015374": {
        "abstract": "We consider the popular tree-based search strategy within the framework of reinforcement learning, the Monte Carlo Tree Search (MCTS), in the context of finite-horizon Markov decision process. We propose a dynamic sampling tree policy that efficiently allocates limited computational budget to maximize the probability of correct selection of the best action at the root node of the tree. Experimental results on Tic-Tac-Toe and Gomoku show that the proposed tree policy is more efficient than other competing methods.",
        "author": "Zhang, Gongbo and Peng, Yijie and Xu, Yilong",
        "booktitle": "2022 Winter Simulation Conference (WSC)",
        "doi": "10.1109/WSC57314.2022.10015374",
        "issn": "1558-4305",
        "keywords": "type:technique,evaluation:Comparison with previous algorithms based on the performance,Gaming Algorithm:Monte Carlo Tree Search (MCTS)",
        "month": "Dec",
        "number": "",
        "pages": "2760-2771",
        "title": "An Efficient Dynamic Sampling Policy for Monte Carlo Tree Search",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2022"
    },
    "4804026": {
        "abstract": "The field of game intelligence has seen an increase in player centric research. That is, machine learning techniques are employed in games with the objective of providing an entertaining and satisfying game experience for the human player. This paper proposes an adaptive game AI that can scale its level of difficulty according to the human player's level of capability for the game freestyle Gomoku. The proposed algorithm scales the level of difficulty during the game and between games based on how well the human player is performing such that it will not be too easy or too difficult. The adaptive game AI was sent out to 50 human respondents as feasibility. It was observed that the adaptive AI was able to successfully scale the level of difficulty to match that of the human player, and the human player found it enjoyable playing at a level similar to his/her own.",
        "author": "Kuan Liang Tan and Tan, Chin Hiong and Tan, Kay Chen and Tay, Arthur",
        "booktitle": "2009 4th International Conference on Autonomous Robots and Agents",
        "doi": "10.1109/ICARA.2000.4804026",
        "issn": "",
        "keywords": "type:application,evaluation:case Study,evaluation:user study,Gaming Algorithm:minmax search algorithm+alpha-beta pruning",
        "month": "Feb",
        "number": "",
        "pages": "507-512",
        "title": "Adaptive game AI for Gomoku",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2009"
    },
    "5171424": {
        "abstract": "The game playing is an import domain of heuristic search, and its procedure is represented by a special and/or tree. Alpha-beta pruning is always used for problem solving by searching the game-playing-tree. In this paper, the plan which child nodes are inserted into game-playing-tree from large value of estimation function to small one when the node of no receiving fixed ply depth is expand is proposed based on alpha-beta pruning. It improves effect of search",
        "author": "Zhang-Congpin and Cui-Jinling",
        "booktitle": "2009 WRI World Congress on Computer Science and Information Engineering",
        "doi": "10.1109/CSIE.2009.527",
        "keywords": "type:technique,evaluation:Comparison with previous algorithms based on the performance,Gaming Algorithm:minmax search algorithm+alpha-beta pruning",
        "month": "March",
        "pages": "672-674",
        "title": "Improved Alpha-Beta Pruning of Heuristic Search in Game-Playing Tree",
        "type": "INPROCEEDINGS",
        "volume": "2",
        "year": "2009"
    },
    "8531047": {
        "abstract": "Monte Carlo tree search (MCTS) is a heuristic search method that is used to efficiently search decision trees. The method is particularly efficient in searching trees with a high branching factor. MCTS has a number of advantages over traditional tree search algorithms like simplicity, adaptability etc. This paper is a study of existing literature on different types of MCTS, specifically on using Genetic Algorithms with MCTS. It studies the advantages and disadvantages of this approach, and applies an enhanced variant to Gomoku, a board game with a high branching factor.",
        "author": "Mohandas, Sabarinath and Nizar, M Abdul",
        "booktitle": "2018 International CET Conference on Control, Communication, and Computing (IC4)",
        "doi": "10.1109/CETIC4.2018.8531047",
        "keywords": "type:technique,evaluation:Comparison with previous algorithms based on the performance,Gaming Algorithm:Monte Carlo Tree Search (MCTS)",
        "month": "July",
        "pages": "372-376",
        "title": "A.I for Games with High Branching Factor",
        "type": "INPROCEEDINGS",
        "year": "2018"
    },
    "9003020": {
        "abstract": "We combine Adaptive Dynamic Programming (ADP), a reinforcement learning method and UCB applied to trees (UCT) algorithm with a more powerful heuristic function based on Progressive Bias method and two pruning strategies for a traditional board game Gomoku. For the Adaptive Dynamic Programming part, we train a shallow forward neural network to give a quick evaluation of Gomoku board situations. UCT is a general approach in MCTS as a tree policy. Our framework use UCT to balance the exploration and exploitation of Gomoku game trees while we also apply powerful pruning strategies and heuristic function to re-select the available 2-adjacent grids of the state and use ADP instead of simulation to give estimated values of expanded nodes. Experiment result shows that this method can eliminate the search depth defect of the simulation process and converge to the correct value faster than single UCT. This approach can be applied to design new Gomoku AI and solve other Gomoku-like board game.",
        "author": "Cao, Xu and Lin, Yanghao",
        "booktitle": "2019 IEEE Symposium Series on Computational Intelligence (SSCI)",
        "doi": "10.1109/SSCI44817.2019.9003020",
        "keywords": "type:technique,evaluation:case study,Gaming Algorithm:Monte Carlo Tree Search (MCTS)",
        "month": "Dec",
        "pages": "50-56",
        "title": "UCT-ADP Progressive Bias Algorithm for Solving Gomoku",
        "type": "INPROCEEDINGS",
        "year": "2019"
    },
    "9778476": {
        "abstract": "In this paper, the researcher proposes a machine learning Gomoku model, GomokuPro, which is based on CNN (Convolutional Neural Network) as well as Monte Carlo tree search. The purpose of this research aggregation is to solve the previous problem of artificial intelligence algorithms taking too long to compute in board games. The researchers turned a more multidimensional fractional model into an adaptive model based on a single machine learning strategy previously developed by the researchers and capable of making judgments and predictions based on the following human algorithms. Due to the limitations of the hardware used for testing, the researchers found that the results were not applicable to some specific cases. Although this algorithm significantly reduces the computational effort, it still does not provide robust performance in some cases. The computational effort of convolutional neural networks is also influenced by the type of data. However, most of the time, machine learning models are still able to make master predictions.",
        "author": "Fu, Xiang",
        "booktitle": "2022 7th International Conference on Intelligent Computing and Signal Processing (ICSP)",
        "doi": "10.1109/ICSP54964.2022.9778476",
        "issn": "",
        "keywords": "type:technique,evaluation:case study,Gaming Algorithm:Monte Carlo Tree Search (MCTS)",
        "month": "April",
        "number": "",
        "pages": "1671-1677",
        "title": "GomokuPro: An Implementation of Enhanced Machine Learning Algorithm Utilizing Convolutional Neural Network in Gomoku Strategy and Predictions Model",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2022"
    },
    "AlusL.V.1996GSBN": {
        "abstract": "Many decades ago, Japanese professional Go\u2010Moku players stated that Go\u2010Moku (five\u2010in\u2010a\u2010row on a horizontally placed 15\u00d715 board) is a won game for the player to move first. So far, this claim has never been substantiated by (a tree of) variations or by a computer program. Meanwhile, many variants of Go\u2010Moku with slightly different rules have been developed. This paper shows that for two common variants, the game\u2010theoretical value has been established. Moreover, the Go\u2010Moku program Victoria is described. It uses two new search techniques: threat\u2010space search and proof\u2010number search. One of the results is that Victoria is bound to win against any (optimal) counterplay if it moves first. Furthermore, it achieves good results as a defender against nonoptimally playing opponents. In this contribution we focus on threat\u2010space search and its advantages compared to conventional search algorithms.",
        "address": "Oxford, UK",
        "author": "Alus, L. V. and van den Herik,1, H. J. and Huntjens, M. P. H.",
        "issn": "0824-7935",
        "journal": "Computational intelligence",
        "keywords": "type:technique,evaluation:case study,Gaming Algorithm:Victoria Threat-Space Search",
        "language": "eng",
        "number": "1",
        "pages": "7--23",
        "publisher": "Blackwell Publishing Ltd",
        "title": "GO-MOKU SOLVED BY NEW SEARCH TECHNIQUES",
        "type": "article",
        "volume": "12",
        "year": "1996"
    },
    "Ranjitha_2020": {
        "abstract": "A game usually used as a synonym for entertainment also serves as an educational tool. Originally targeting the enjoyment, the meaning of the game has evolved to much greater conceptions and applications. Games require physical or mental or sometimes both the simulation. Many games help develop practical skills, serve as a form of exercise, or otherwise perform an educational, simulation, or psychological role. Having to be built on some key elements, which are goals, rules, challenge, and interaction. Various strategies and algorithms such as path finding and decision trees, have been developed to simulate those interactions between the human user and the computer in front of him. In video games, artificial intelligence (AI) is used to generate responsive, adaptive or intelligent behaviours primarily in non-player characters (NPCs) similar to human-like intelligence. This paper makes a short analysis of those preferred techniques and suggest from the study and the outcomes, the efficiency of each. The paper also focuses on the heuristic function, implementation platforms and design guidelines of the various searching algorithms used in adaptive games.",
        "author": "M Ranjitha and Kazaka Nathan and Lincy Joseph",
        "doi": "10.1088/1742-6596/1427/1/012006",
        "journal": "Journal of Physics: Conference Series",
        "keywords": "type:technique, evaluation:case study,evaluation:user study,Gaming Algorithm:minmax search algorithm+alpha-beta pruning",
        "month": "jan",
        "number": "1",
        "pages": "012006",
        "publisher": "IOP Publishing",
        "title": "Artificial Intelligence Algorithms and Techniques in the computation of Player-Adaptive Games",
        "type": "article",
        "url": "https://dx.doi.org/10.1088/1742-6596/1427/1/012006",
        "volume": "1427",
        "year": "2020"
    },
    "xie2018alphagomoku": {
        "abstract": "In this project, we combine AlphaGo algorithm with Curriculum Learning to crack the game of Gomoku. Modifications like Double Networks Mechanism and Winning Value Decay are implemented to solve the intrinsic asymmetry and short-sight of Gomoku. Our final AI AlphaGomoku, through two days\u2019 training on a single GPU, has reached humans\u2019 playing level.",
        "archiveprefix": "arXiv",
        "author": "Zheng Xie and XingYu Fu and JinYuan Yu",
        "eprint": "1809.10595",
        "keywords": "type:application,evaluation:case study,Gaming Algorithm:Monte Carlo Tree Search (MCTS)",
        "primaryclass": "cs.AI",
        "title": "AlphaGomoku: An AlphaGo-based Gomoku Artificial Intelligence using Curriculum Learning",
        "type": "misc",
        "year": "2018"
    }
}});